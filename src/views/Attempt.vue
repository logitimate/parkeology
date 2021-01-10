<template>
  <section class="flex justify-center align-middle">
    <div class="w-2/4 mt-10">
      <h1
        class="text-2xl lg:text-4xl font-bold text-teal-600 mb-2 lg:mb-4 text-center"
      >
        Logan's Parkeology Route
      </h1>
      <table class="table w-full">
        <thead>
          <tr>
            <th>Ride</th>
            <th>Time</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="entry in attemptLog" v-bind:key="entry.attraction">
            <td v-bind:class="'bg-' + entry.park.id" class="text-white">
              {{ entry.park.name }}
            </td>
            <td v-bind:class="'bg-' + entry.park.id" class="text-white">
              {{ entry.attraction }}
            </td>
            <td v-bind:class="'bg-' + entry.park.id" class="text-white">
              {{ formatDate(entry.completed) }}
            </td>
          </tr>
        </tbody>
      </table>
      <button class="primary mt-10" @click="showModal = true">Add Ride</button>
    </div>
    <AddRideModal v-bind:show="showModal" @add="add"></AddRideModal>
  </section>
</template>
<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import AddRideModal from "@/components/AddRideModal.vue";
import { AttemptEntry } from "@/models/attempt-entry";

@Component({
  components: {
    AddRideModal
  }
})
export default class Attempt extends Vue {
  showModal = false;
  attemptLog: AttemptEntry[] = [];

  add(entry: AttemptEntry) {
    this.showModal = false;
    this.attemptLog.push(entry);
  }

  formatDate(date: Date): string {
    return date.toLocaleTimeString();
  }
}
</script>
