<template>
  <section
    class="min-h-screen bg-gray-100 py-6 flex flex-col justify-center sm:py-12 dark:bg-gray-800"
  >
    <div class="relative py-3 sm:max-w-xl sm:mx-auto">
      <div
        class="absolute inset-0 bg-gradient-to-r from-blue-400 to-blue-500 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl"
      ></div>
      <div
        class="relative px-4 py-10 dark:bg-gray-700 bg-white shadow-lg sm:rounded-3xl sm:p-20"
      >
        <div class="max-w-md mx-auto">
          <div class="divide-y divide-gray-200">
            <div
              class="py-8 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7"
            >
              <h1
                class="text-2xl lg:text-4xl font-bold text-teal-600 mb-2 lg:mb-4 dark:text-white"
              >
                Parkeology Tracker
              </h1>
              <p class="text-gray-400 mb-2 lg:mb-4">
                Tool to keep track with parks and route running for the
                parkeology challenge.
              </p>
              <form action="#">
                <div class="mb-6">
                  <label
                    for="name"
                    class="mb-3 block text-gray-700 dark:text-white text-left"
                    >Full name:</label
                  >
                  <input
                    type="text"
                    id="name"
                    class="bg-white rounded-md border border-gray-200 p-3 focus:outline-none w-full"
                    placeholder="John Doe"
                    required
                  />
                </div>
                <div class="mb-6">
                  <label
                    for="twitterHandle"
                    class="mb-3 block text-gray-700 dark:text-white text-left"
                  >
                    Twitter Handle
                  </label>
                  <input
                    type="text"
                    id="twitterHandle"
                    class="bg-white rounded-md border border-gray-200 p-3 focus:outline-none w-full"
                    placeholder="john.doe"
                    required
                  />
                </div>
                <div class="flex justify-end">
                  <button type="submit" class="primary" @click="startRun()">
                    Start Run
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import { Vue } from "vue-property-decorator";
import router from "../router";

export default class Home extends Vue {
  startRun() {
    router.push("/attempt");
  }
}
</script>
