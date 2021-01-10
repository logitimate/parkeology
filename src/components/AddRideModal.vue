<template>
  <div v-if="show">
    <div
      class="fixed overflow-x-hidden overflow-y-auto inset-0 flex justify-center items-center z-50"
    >
      <div class="relative mx-auto w-auto max-w-2xl">
        <div class="bg-white w-full flex flex-col p-10">
          <label for="attraction" class="mb-10">Attraction</label>
          <select
            v-model="selectedAttraction"
            @change="buildAttemptEntry()"
            name="attraction"
            id="attraction"
            class="mb-10 border-gray-300"
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
          <button
            class="primary"
            @click="add()"
            v-bind:disabled="!selectedAttraction"
          >
            Add
          </button>
        </div>
      </div>
    </div>
    <div class="absolute inset-0 z-40 opacity-25 bg-black"></div>
  </div>
</template>

<script lang="ts">
import { Component, Emit, Prop, Vue } from "vue-property-decorator";
import { AttemptEntry } from "@/models/attempt-entry";
import _parks from "@/models/parks.json";

@Component
export default class AddRideModal extends Vue {
  selectedAttraction = null;
  @Prop() show = false;

  @Emit("add") add() {
    return this.buildAttemptEntry();
  }

  parks = _parks.parks;

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
}
</script>
