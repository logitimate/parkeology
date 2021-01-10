<template>
  <div v-if="show">
    <div
      class="fixed overflow-x-hidden overflow-y-auto inset-0 flex justify-center items-center z-50"
      @click="close('backdrop')"
    >
      <div class="relative mx-auto w-auto max-w-2xl">
        <div
          class="bg-white h-screen md:h-1/4 w-full flex flex-col py-10 px-40 lg:rounded lg:p-10"
          v-on:click.stop
        >
          <label for="attraction" class="mb-10">Attraction</label>
          <select
            v-model="selectedAttraction"
            @change="buildAttemptEntry()"
            name="attraction"
            id="attraction"
            class="mb-10 border"
          >
            <optgroup
              v-bind:label="park.name"
              v-for="park of parks"
              v-bind:key="park.name"
            >
              <option
                v-bind:value="attraction"
                v-bind:key="attraction"
                v-for="attraction of park.rides"
                >{{ attraction }}
              </option>
            </optgroup>
          </select>
          <div class="flex justify-center">
            <button
              class="primary w-full lg:w-1/4"
              v-bind:disabled="!selectedAttraction"
              @click="close('add')"
            >
              Add
            </button>
          </div>
        </div>
      </div>
    </div>
    <div class="absolute inset-0 z-40 opacity-25 bg-black"></div>
  </div>
</template>

<script lang="ts">
import { Component, Emit, Prop, Vue, Watch } from "vue-property-decorator";
import { AttemptEntry } from "@/models/attempt-entry";
import _parks from "@/models/parks.json";
import { Park } from "@/models/park";

@Component
export default class AddRideModal extends Vue {
  selectedAttraction = null;
  parks = null;

  @Prop() show = false;
  @Prop() completedRides: AttemptEntry[];

  @Watch("show", { immediate: true, deep: true })
  onShowChange() {
    this.parks = this.removeCompletedOptions(_parks.parks, this.completedRides);
  }

  @Emit("close") close(action: string) {
    return {
      action,
      data: action === "add" ? this.buildAttemptEntry() : null
    };
  }

  buildAttemptEntry(): AttemptEntry {
    const park = this.parks.find(park =>
      park.rides.includes(this.selectedAttraction)
    );
    return {
      park: park,
      attraction: this.selectedAttraction,
      completed: new Date()
    };
  }

  removeCompletedOptions(parks: Park[], completedRides: AttemptEntry[]) {
    if (completedRides.length === 0) {
      return parks;
    }

    return parks.reduce((notCompletedParks, park) => {
      park.rides = park.rides.filter(ride => {
        return !completedRides.map(ride => ride.attraction).includes(ride);
      });
      notCompletedParks.push(park);
      return notCompletedParks;
    }, []);
  }
}
</script>
