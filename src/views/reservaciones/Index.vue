<template>
  <div class="isolate bg-white px-6 py-24 sm:py-32 lg:px-8">
    <div class="absolute inset-x-0 top-[-10rem] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[-20rem]" aria-hidden="true">
      <div class="relative left-1/2 -z-10 aspect-1155/678 w-[36.125rem] max-w-none -translate-x-1/2 rotate-[30deg] bg-linear-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-40rem)] sm:w-[72.1875rem]" style="clip-path: polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)" />
    </div>
    <div class="mx-auto max-w-2xl text-center">
      <h2 class="text-4xl font-semibold tracking-tight text-balance text-gray-900 sm:text-5xl">Contact sales</h2>
      <p class="mt-2 text-lg/8 text-gray-600">Aute magna irure deserunt veniam aliqua magna enim voluptate.</p>
    </div>
    <form action="#" method="POST" class="mx-auto mt-16 max-w-xl sm:mt-20">
      <div class="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
        <div>
          <label for="first-name" class="block text-sm/6 font-semibold text-gray-900">Selecciona un plan </label>
          <div class="mt-2.5">
            <select id="plan" name="plan" autocomplete="plan" aria-label="plan" class=" col-start-1 row-start-1 w-full appearance-none rounded-md py-2 pr-7 pl-3.5 text-base text-gray-500 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6">
                <option>Solo alojamiento</option>
                <option>Desayuno bufet</option>
                <option>Todo incluido</option>
            </select>
          </div>
        </div>
        <div>
          <label for="first-name" class="block text-sm/6 font-semibold text-gray-900">Selecciona la vista de la habitación </label>
          <div class="mt-2.5">
            <!-- <select id="vista" name="vista" autocomplete="vista" aria-label="vista" class=" col-start-1 row-start-1 w-full appearance-none rounded-md py-2 pr-7 pl-3.5 text-base text-gray-500 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6">
                <option>vista a la montaña</option>
                <option>vista a la al mar</option>
            </select> -->
            <Listbox as="div" v-model="selected">
                <ListboxLabel class="block text-sm/6 font-medium text-gray-900">Selecciona la vista de la habitación </ListboxLabel>
                <div class="relative mt-2">
                <ListboxButton class="grid w-full cursor-default grid-cols-1 rounded-md bg-white py-1.5 pr-2 pl-3 text-left text-gray-900 outline-1 -outline-offset-1 outline-gray-300 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6">
                    <span class="col-start-1 row-start-1 flex items-center gap-3 pr-6">
                    <img :src="selected.avatar" alt="" class="size-5 shrink-0 rounded-full" />
                    <span class="block truncate">{{ selected.name }}</span>
                    </span>
                    <ChevronUpDownIcon class="col-start-1 row-start-1 size-5 self-center justify-self-end text-gray-500 sm:size-4" aria-hidden="true" />
                </ListboxButton>

                <transition leave-active-class="transition ease-in duration-100" leave-from-class="opacity-100" leave-to-class="opacity-0">
                    <ListboxOptions class="absolute z-10 mt-1 max-h-56 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black/5 focus:outline-hidden sm:text-sm">
                    <ListboxOption as="template" v-for="person in people" :key="person.id" :value="person" v-slot="{ active, selected }">
                        <li :class="[active ? 'bg-indigo-600 text-white outline-hidden' : 'text-gray-900', 'relative cursor-default py-2 pr-9 pl-3 select-none']">
                        <div class="flex items-center">
                            <img :src="person.avatar" alt="" class="size-5 shrink-0 rounded-full" />
                            <span :class="[selected ? 'font-semibold' : 'font-normal', 'ml-3 block truncate']">{{ person.name }}</span>
                        </div>

                        <span v-if="selected" :class="[active ? 'text-white' : 'text-indigo-600', 'absolute inset-y-0 right-0 flex items-center pr-4']">
                            <CheckIcon class="size-5" aria-hidden="true" />
                        </span>
                        </li>
                    </ListboxOption>
                    </ListboxOptions>
                </transition>
                </div>
            </Listbox>
          </div>
          
        </div>
        <div>
          <label for="first-name" class="block text-sm/6 font-semibold text-gray-900">Tipo de habitación </label>
          <div class="mt-2.5">
            <select id="habi" name="habi" autocomplete="habi" aria-label="habi" class=" col-start-1 row-start-1 w-full appearance-none rounded-md py-2 pr-7 pl-3.5 text-base text-gray-500 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6">
                <option>Standar</option>
                <option>King zise</option>
            </select>
          </div>
        </div>
      </div>
      <div class="mt-10">
        <button type="submit" class="block w-full rounded-md bg-indigo-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Let's talk</button>
      </div>
    </form>
  </div>
</template>
<script setup>
// import { ref } from 'vue'
import { Listbox, ListboxButton, ListboxLabel, ListboxOption, ListboxOptions } from '@headlessui/vue'
import { ChevronUpDownIcon } from '@heroicons/vue/16/solid'
import { CheckIcon } from '@heroicons/vue/20/solid'
// import { ref } from 'vue'
// import { ChevronDownIcon } from '@heroicons/vue/16/solid'
// import { Switch, SwitchGroup, SwitchLabel } from '@headlessui/vue'

// const agreed = ref(false)
</script>
<script>
export default {
    name: 'ReservacionPath',
    data() {
        return {
            people:[
                { id: 1, name: 'Solo alojamiento',  },
                { id: 2, name: 'Desayuno bufet',  },
                { id: 3, name: 'Todo incluido',  },
            ],
            selected: { id: 1, name: 'Solo alojamiento', avatar: 'https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600' },
            form: {
                name: '',
                email: '',
                phone: '',
                checkIn: '',
                checkOut: '',
                guests: 1,
                roomType: '',
                specialRequests: '',
            },
        };
    },
    methods: {
        // submitReservation() {
        //     console.log("Datos de la reservación:", this.form);
        //     alert("¡Reservación enviada con éxito!");
        //     // Aquí puedes agregar lógica para enviar los datos al servidor
        // },
    },
};
</script>

<style scoped>
.selets2{
    border-bottom: solid 1px;
    border-radius: 0px;
}
/* No se necesita CSS adicional ya que Tailwind CSS se encarga del diseño */
</style>