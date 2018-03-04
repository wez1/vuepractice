<template>
  <b-container fluid>
    <!-- User Interface controls -->
    <b-row>
      <b-col md="6" class="my-1">
        <b-form-group horizontal label="Suodata" class="mb-0">
          <b-input-group>
            <b-form-input v-model="filter" placeholder="Kirjoita hakusana" />
            <b-input-group-append>
              <b-btn :disabled="!filter" @click="filter = ''">Tyhjennä</b-btn>
            </b-input-group-append>
          </b-input-group>
        </b-form-group>
      </b-col>
      <b-col md="6" class="my-1">
        <b-form-group horizontal label="Järjestä" class="mb-0">
          <b-input-group>
            <b-form-select v-model="sortBy" :options="sortOptions">
              <option slot="first" :value="null">-- none --</option>
            </b-form-select>
            <b-input-group-append>
              <b-form-select :disabled="!sortBy" v-model="sortDesc">
                <option :value="false">Nous.</option>
                <option :value="true">Lask.</option>
              </b-form-select>
            </b-input-group-append>
          </b-input-group>
        </b-form-group>
      </b-col>
      <b-col md="6" class="my-1">
        <b-pagination :total-rows="totalRows" :per-page="perPage" v-model="currentPage" class="my-0" />
      </b-col>
      <b-col md="6" class="my-1">
        <b-form-group horizontal label="Per page" class="mb-0">
          <b-form-select :options="pageOptions" v-model="perPage" />
        </b-form-group>
      </b-col>
    </b-row>

    <!-- Main table element -->
    <b-table show-empty
             stacked="md"
             :items="items"
             :fields="fields"
             :current-page="currentPage"
             :per-page="perPage"
             :filter="filter"
             :sort-by.sync="sortBy"
             :sort-desc.sync="sortDesc"
             @filtered="onFiltered">
      <template slot="name" slot-scope="row">{{row.value.first}} {{row.value.last}}</template>
      <template slot="isActive" slot-scope="row">{{row.value?'Yes :)':'No :('}}</template>
      <template slot="actions" slot-scope="row">
        <!-- We use @click.stop here to prevent a 'row-clicked' event from also happening -->
        <b-button size="sm" @click.stop="info(row.item, row.index, $event.target)" class="mr-1">
          Info modal
        </b-button>
      </template>
    </b-table>

    <!-- Info modal -->
    <b-modal id="modalInfo" @hide="resetModal" :title="modalInfo.title" ok-only>
      <pre>{{ modalInfo.content }}<br><a :href="modalInfo.linkki">Linkki hakuun</a></pre>
    </b-modal>

  </b-container>
</template>

<script>
import DataRequestService from '@/services/DataRequestService'
const items = []

export default {
  data () {
    return {
      items: items,
      fields: [
        { key: 'haku_paattyy_pvm', label: 'Haku päättyy', sortable: true },
        { key: 'ammattiala', label: 'Ammattiala', sortable: true },
        { key: 'tyotehtava', label: 'Työtehtävä', sortable: true },
        { key: 'actions', label: 'Actions' }
      ],
      currentPage: 1,
      perPage: 5,
      totalRows: items.length,
      pageOptions: [ 5, 10, 15, 25 ],
      sortBy: null,
      sortDesc: false,
      filter: null,
      modalInfo: { title: '', content: '' }
    }
  },
  async created () {
    try {
      let response = await DataRequestService.requestTableData()
      this.items = response.data
    } catch (e) {
      this.error = e
    }
  },
  computed: {
    sortOptions () {
      // Create an options list from our fields
      return this.fields
        .filter(f => f.sortable)
        .map(f => { return { text: f.label, value: f.key } })
    }
  },
  methods: {
    info (item, index, button) {
      this.modalInfo.title = `Ala: ${item.ammattiala}`
      this.modalInfo.content =
`Organisaatio:
  ${item.organisaatio}
Työtehtävä:
  ${item.tyotehtava}
Työnhaku päättyy:
  ${item.haku_paattyy_pvm}`
      this.modalInfo.linkki = item.linkki
      this.$root.$emit('bv::show::modal', 'modalInfo', button)
    },
    resetModal () {
      this.modalInfo.title = ''
      this.modalInfo.content = ''
    },
    onFiltered (filteredItems) {
      // Trigger pagination to update the number of buttons/pages due to filtering
      this.totalRows = filteredItems.length
      this.currentPage = 1
    }
  }
}
</script>
<style scoped>

</style>
