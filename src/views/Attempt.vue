<template>
  <section class="flex justify-center align-middle p-2.5">
    <div class="w-full lg:w-2/4 mt-10">
      <h1
        class="text-2xl lg:text-4xl font-bold text-teal-600 mb-2 lg:mb-4 text-center"
      >
        Logan's Parkeology Route
      </h1>
      <div v-if="attemptLog.length > 0">
        <div class="shadow w-full bg-gray-100 my-2">
          <div
            class="text-xs leading-none py-1 text-center text-white"
            :class="`bg-${attemptLog[attemptLog.length - 1].park.id}`"
            v-bind:style="{ width: completion() + '%' }"
          >
            {{ completion() }}%
          </div>
        </div>
        <table class="table w-full">
          <thead>
            <tr>
              <th class="text-left">Route</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="entry in attemptLog" v-bind:key="entry.attraction">
              <td v-bind:class="'bg-' + entry.park.id" class="text-white">
                <div class="flex justify-between align-baseline">
                  <h2>{{ entry.attraction }}</h2>
                  <h2 class="ml-auto">
                    {{ formatDate(entry.completed) }}
                  </h2>
                  <h2 class="ml-2" @click="removeEntry(entry)">X</h2>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
        <button class="primary mt-10 w-full lg:w-1/4" @click="showModal = true">
          Add Ride
        </button>
      </div>
      <div class="flex justify-center" v-else>
        <button class="primary text-1xl" @click="showModal = true">
          Start your run!
        </button>
      </div>
    </div>
    <AddRideModal
      v-bind:show="showModal"
      @close="add"
      v-bind:completed-rides="attemptLog"
    ></AddRideModal>
  </section>
</template>
<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import AddRideModal from "@/components/AddRideModal.vue";
import { AttemptEntry } from "@/models/attempt-entry";
import _parks from "@/models/parks.json";

@Component({
  components: {
    AddRideModal
  }
})
export default class Attempt extends Vue {
  showModal = false;
  attemptLog: AttemptEntry[] = [];

  add(modalEvent: { data: any; action: string }) {
    this.showModal = false;
    if (modalEvent.data) this.attemptLog.push(modalEvent.data);
  }

  formatDate(date: Date): string {
    return date.toLocaleTimeString();
  }

  removeEntry(log: AttemptEntry) {
    this.attemptLog = this.attemptLog.filter(
      al => al.attraction !== log.attraction
    );
  }

  completion() {
    console.log(_parks.parks.flatMap(p => p.rides));
    return Math.round(
      (this.attemptLog.length / _parks.parks.flatMap(p => p.rides).length) * 100
    );
  }
}
</script>
