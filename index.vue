<script setup>
    // import imgBg from '../assets/bgstate.jpg'
    import { ref, onMounted, onUnmounted } from 'vue';

    import ppalogo from '../assets/hotelbok.png'
    // import ppalogo from '../assets/hotelbok.png'

    const isScrolled = ref(false);

    const handleScroll = () => {
    isScrolled.value = window.scrollY > 50; // Cambia el valor según el umbral deseado
    };

    onMounted(() => {
        window.addEventListener('scroll', handleScroll);
    });

    onUnmounted(() => {
        window.removeEventListener('scroll', handleScroll);
    });
</script>
<template>
    <div class="sm:flex items-center shadow-md ">
        <!-- <div style="height: 5vh; margin-bottom:6px; background: white; " class="bg-[#024a71] w-full h-[1vh] " >
        </div> -->
        <div class="w-full flex justify-center md:px-10 sm:px-5 transition-all duration-300" :class="{ 'opacity-0 scale-75': isScrolled, 'opacity-100 scale-100': !isScrolled }">
            <img class="bg-cover" :src="ppalogo" alt="" />
        </div>

        <div class="md:px-10 sm:px-5 ctnn-33">
            <h1 class="text-gray-800 font-bold text-2xl my-2 clsstt-3" :class="{ 'opacity-0 scale-75': isScrolled, 'opacity-100 scale-100': !isScrolled }">luxe reserve</h1>
            <p class="text-gray-700 mb-2 md:mb-6 ltr-33">
                Te mejoramos el precio comparativo con Spedia y Booking....
            </p>
        </div>

    </div>
    <div class="max-w-6xl mt-20" style="margin-top: 100px;" >
        <div class="flex items-center justify-center " v-for="item in tes" :key="item.id">
            <div class="max-w-sm w-full sm:w-1/2 lg:w-1/3 py-6 px-3">
                <div class="bg-white shadow-xl rounded-lg overflow-hidden">
                    <!-- <div class="bg-cover bg-center h-56 p-4" >
                        <img  :src="item.url" alt="" />
           
                    </div> -->
                    <div class="bg-cover bg-center h-56 p-4 image-container">
                        <img :src="item.url" alt="" class="hover-image" />
                    </div>
                    <div class="p-4">
                        <p class="uppercase tracking-wide text-sm font-bold text-gray-700">{{ item.name }}</p>

                    </div>
                    <div>
                        <!-- <p class="text-sm text-gray-700">{{ item.telefono }}</p> -->
                    </div>
                    <div class="px-4 pt-3 pb-4 border-b border-gray-300 bg-gray-100">
                        <div class="flex justify-center items-center pt-2">
                            <button class="butonn-reserv" @click="abrir_mdlserv(item)">
                                hacer reservacion
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <TransitionRoot as="template" :show="open">
        <Dialog as="div" class="relative z-50" @close="open = false">
            <TransitionChild as="template" enter="ease-out duration-300" enter-from="opacity-0" enter-to="opacity-100" leave="ease-in duration-200" leave-from="opacity-100" leave-to="opacity-0">
                <div class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
            </TransitionChild>

            <div class="fixed inset-0 z-10 w-screen overflow-y-auto">
                <div class="flex min-h-full items-end justify-center p-4 text-center sm:items-center max-sm:items-center  sm:p-0 max-2xl:items-center">
                <TransitionChild as="template" enter="ease-out duration-300" enter-from="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95" enter-to="opacity-100 translate-y-0 sm:scale-100" style="    max-height: 95vh;" leave="ease-in duration-200" leave-from="opacity-100 translate-y-0 sm:scale-100" leave-to="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95">
                    <DialogPanel class="relative transform overflow-hidden rounded-lg bg-white px-4 pb-4 pt-5 text-left shadow-xl transition-all sm:my-8 sm:w-10/12 sm:max-w-4xl sm:p-6 max-md:w-11/12 scroll" style="height: 95vh;     width: 100%; margin-block: 25px;">
                        <div>
                            <div class="mt-3 text-center sm:mt-5 ">
                                <!-- <dialog as="h3" class="text-base font-semibold leading-6 text-gray-900" > para el hotel {{  nomhotl }}</dialog> -->
                                <div class="mt-2 mb-2" style="    margin-bottom: 20px;" >
                                    <form class="form">
                                        <div class="title">
                                            <DialogTitle as="h3" class="text-base font-semibold leading-6 text-gray-900">Nueva Reservacion para el  hotel <br> {{  nomhotl }}</DialogTitle>

                                        </div>
                                        <!-- <input class="input" name="email" placeholder="Email" type="email">
                                        <input class="input" name="password" placeholder="Password" type="password"> -->
                                        <span>Selecciona un plan</span>
                                        <div id="checklist">
                                            <input checked="" value="1" name="r" type="radio" id="01" v-model="check" >
                                            <label for="01">Solo alojamiento</label>
                                            <input value="2" name="r" type="radio" id="02" v-model="check">
                                            <label for="02">Desayuno bufet</label>
                                            <input value="3" name="r" type="radio" id="03" v-model="check">
                                            <label for="03">Todo incluido</label>
                                        </div>
                                        <!-- <span>Selecciona la vista de la habitación</span>
                                        <div id="checkvist">
                                            <input checked="" value="1" name="vista" type="radio" id="04" v-model="vista" >
                                            <label for="04">vista a la montaña</label>
                                            <input value="2" name="vista" type="radio" id="05" v-model="vista">
                                            <label for="5">vista a la al mar</label>
                                        </div> -->
                                        <div class="login-with">
      
                                        </div>
                                        <button class="button-confirm">Let`s go →</button>
                                    </form>
                                </div>
                            </div>
                        </div>
                        <div class="mt-5 sm:mt-6 sm:grid sm:grid-flow-row-dense sm:grid-cols-2 sm:gap-3">
                            <button type="button" class="inline-flex w-full justify-center rounded-md bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-gray-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black sm:col-start-2" @click="guardarDatos()">Guardar</button>
                            <button type="button" class="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:col-start-1 sm:mt-0" @click="open = false" ref="cancelButtonRef">Cancelar</button>
                        </div>
                    </DialogPanel>
                </TransitionChild>
                </div>
            </div>
        </Dialog>
    </TransitionRoot>
</template>
<script>
    // import LoginService from '../services/LoginService';
    // import { defineComponent } from "vue";
    // import { RecaptchaV2, useRecaptcha } from "vue3-recaptcha-v2";
    // const { handleGetResponse } = useRecaptcha();
    import { Dialog, DialogPanel, DialogTitle, TransitionChild, TransitionRoot } from '@headlessui/vue'

    export default {
        name: 'LoginPage',
        components: {
            Dialog,
            DialogPanel,
            DialogTitle,
            TransitionChild,
            TransitionRoot
        },
        data() {
            return {
                tes: [
                    { id: 1, name: 'KRYSTAL GRAND PUNTA CANCÚN - CANCÚN, QUINTANA ROO', telefono: '01 (998) 891-5555', url:require('@/assets/hotel1.jpg') },
                    { id: 2, name: 'KRYSTAL GRAND LOS CABOS - SAN JOSÉ DEL CABO, BCS', telefono: '01 (624) 163-4750', url:require('@/assets/hotel2.jpg')  },
                    { id: 3, name: 'KRYSTAL GRAND SUITES INSURGENTES SUR - CIUDAD DE MÉXICO, CDMX', telefono: '01 (55) 5322-1580', url: require('@/assets/hotel3.jpg')  },
                    { id: 4, name: 'KRYSTAL GRAND NUEVO VALLARTA - PUERTO VALLARTA, JALISCO', telefono: '01 (322) 226-1050', url:require('@/assets/hotel1.jpg')  },
                    { id: 5, name: 'KRYSTAL GRAND PUERTO VALLARTA - PUERTO VALLARTA, JALISCO', telefono: '01 (322) 176-1176' , url:require('@/assets/hotel1.jpg')  },
                    { id: 6, name: 'KRYSTAL GRAND RESIDENCES & VILLAS SAN MIGUEL DE ALLENDE', telefono: '01 (415) 148-2000', url:require('@/assets/hotel1.jpg')  },
                    { id: 7, name: 'KRYSTAL CANCÚN - CANCÚN, QUINTANA ROO', telefono: '01 (998) 848-9800' , url:require('@/assets/hotel1.jpg')  },
                    { id: 8, name: 'KRYSTAL PUERTO VALLARTA - PUERTO VALLARTA, JALISCO', telefono: '01 (322) 226-0700' , url:require('@/assets/hotel1.jpg')  },
                    { id: 9, name: 'KRYSTAL IXTAPA - IXTAPA ZIHUATANEJO, GUERRERO', telefono: '01 (755) 555-0510' , url:require('@/assets/hotel1.jpg')  },
                    { id: 10, name: 'PLAYA KRYSTAL ACAPULCO - ACAPULCO, GUERRERO', telefono: '01 (744) 485-5050' , url:require('@/assets/hotel1.jpg')  },
                    { id: 11, name: 'KRYSTAL SATÉLITE MARIA BARBARA - TLALNEPANTLA, MÉXICO', telefono: '01 (55) 5366-9924' , url:require('@/assets/hotel1.jpg')  },
                    { id: 12, name: 'KRYSTAL MONTERREY - MONTERREY, NUEVO LEÓN', telefono: '01 (81) 8319-0900' , url:require('@/assets/hotel1.jpg')  },
                    { id: 13, name: 'KRYSTAL URBAN CANCUN CENTRO - CANCÚN, QUINTANA ROO', telefono: '01 (998) 848-8000' , url:require('@/assets/hotel1.jpg')  },
                    { id: 14, name: 'KRYSTAL URBAN CIUDAD JUAREZ - CIUDAD JUAREZ, CHIHUAHUA', telefono: '01 (656) 629-0995' , url:require('@/assets/hotel1.jpg')  },
                    { id: 15, name: 'KRYSTAL URBANO GUADALAJARA - GUADALAJARA, JALISCO', telefono: '01 (33) 3679-3780' , url:require('@/assets/hotel1.jpg')  },
                    { id: 16, name: 'KRYSTAL URBAN / MONTERREY - MONTERREY, NUEVO LEÓN', telefono: '01 (81) 8122-8000' , url:require('@/assets/hotel1.jpg')  },
                    { id: 17, name: 'HAMPTON INN & SUITES PARAISO TABASCO - PARAISO, TABASCO', telefono: '01 (933) 333-6092' , url:require('@/assets/hotel1.jpg')  },
                    { id: 18, name: 'HYATT PLACE AGUASCALIENTES', telefono: '(449) 800-1234' , url:require('@/assets/hotel1.jpg')  },
                    { id: 19, name: 'HYATT CENTRIC LEON', telefono: '01 (477) 344-1100' , url:require('@/assets/hotel1.jpg')  },
                    { id: 20, name: 'HYATT REGENCY MÉXICO CITY INSURGENTES', telefono: '01 (55) 57247700' , url:require('@/assets/hotel1.jpg')  },
                    { id: 21, name: 'MAHEKAL - PLAYA DEL CARMEN', telefono: '800 836-8942' , url:require('@/assets/hotel1.jpg')  },
                ],
                nomhotl: '',
                vista: 0,
                check: 0,
                idhotl: 0,
                open: false,
                userAdd: {
                    first_name: '',
                    tipo_usuario: 0,
                    last_name: '',
                    email: '',
                    password: '',
                    password_confirmation: '',
                },
            }
        },
        methods: {
            abrir_mdlserv(item){
                console.log('id', item);
                this.nomhotl = item.name
                this.idhotl = item.id
                this.open = true;
            }
        }
    }
</script>
<style scoped>
#checklist {
  --background: #000000;
  --text: #414856;
  --check: #add8e6;
  --disabled: #c3c8de;
  --width: 100%;
  --height: 180px;
  --border-radius: 10px;
  background: var(--background);
  width: var(--width);
  height: var(--height);
  border-radius: var(--border-radius);
  position: relative;
  box-shadow: 0 10px 30px rgba(65, 72, 86, 0.05);
  padding: 30px 45px;
  display: grid;
  grid-template-columns: 30px auto;
  justify-content: start;
  align-items: flex-start;
}
#checkvist {
  --background: #000000;
  --text: #414856;
  --check: #add8e6;
  --disabled: #c3c8de;
  --width: 100%;
  --height: 180px;
  --border-radius: 10px;
  background: var(--background);
  width: var(--width);
  height: var(--height);
  border-radius: var(--border-radius);
  position: relative;
  box-shadow: 0 10px 30px rgba(65, 72, 86, 0.05);
  padding: 30px 45px;
  display: grid;
  grid-template-columns: 30px auto;
  justify-content: start;
  align-items: flex-start;
}

#checklist label {
  /* color: var(--text); */
  color: white;
  position: relative;
  cursor: pointer;
  display: grid;
  align-items: center;
  width: fit-content;
  transition: color 0.3s ease;
  margin-right: 20px;
}
#checkvist label {
  /* color: var(--text); */
  color: white;
  position: relative;
  cursor: pointer;
  display: grid;
  align-items: center;
  width: fit-content;
  transition: color 0.3s ease;
  margin-right: 20px;
}

#checklist label::before, #checklist label::after {
  content: "";
  position: absolute;
}
#checkvist label::before, #checkvist label::after {
  content: "";
  position: absolute;
}

#checklist label::before {
  height: 2px;
  width: 8px;
  left: -27px;
  background: var(--check);
  border-radius: 2px;
  transition: background 0.3s ease;
}
#checkvist label::before {
  height: 2px;
  width: 8px;
  left: -27px;
  background: var(--check);
  border-radius: 2px;
  transition: background 0.3s ease;
}

#checklist label:after {
  height: 4px;
  width: 4px;
  top: 8px;
  left: -25px;
  border-radius: 50%;
}
#checkvist label:after {
  height: 4px;
  width: 4px;
  top: 8px;
  left: -25px;
  border-radius: 50%;
}

#checklist input[type="radio"] {
  -webkit-appearance: none;
  -moz-appearance: none;
  position: relative;
  height: 15px;
  width: 15px;
  outline: none;
  border: 0;
  margin: 0 15px 0 0;
  cursor: pointer;
  background: var(--background);
  display: grid;
  align-items: center;
  margin-right: 20px;
}

#checklist input[type="radio"]::before, #checklist input[type="radio"]::after {
  content: "";
  position: absolute;
  height: 2px;
  top: auto;
  background: var(--check);
  border-radius: 2px;
}
#checkvist input[type="radio"] {
  -webkit-appearance: none;
  -moz-appearance: none;
  position: relative;
  height: 15px;
  width: 15px;
  outline: none;
  border: 0;
  margin: 0 15px 0 0;
  cursor: pointer;
  background: var(--background);
  display: grid;
  align-items: center;
  margin-right: 20px;
}

#checkvist input[type="radio"]::before, #checkvist input[type="radio"]::after {
  content: "";
  position: absolute;
  height: 2px;
  top: auto;
  background: var(--check);
  border-radius: 2px;
}

#checklist input[type="radio"]::before {
  width: 0px;
  right: 60%;
  transform-origin: right bottom;
}

#checklist input[type="radio"]::after {
  width: 0px;
  left: 40%;
  transform-origin: left bottom;
}

#checklist input[type="radio"]:checked::before {
  animation: check-01 0.4s ease forwards;
}

#checklist input[type="radio"]:checked::after {
  animation: check-02 0.4s ease forwards;
}
#checkvist input[type="radio"]::before {
  width: 0px;
  right: 60%;
  transform-origin: right bottom;
}

#checkvist input[type="radio"]::after {
  width: 0px;
  left: 40%;
  transform-origin: left bottom;
}

#checkvist input[type="radio"]:checked::before {
  animation: check-01 0.4s ease forwards;
}

#checkvist input[type="radio"]:checked::after {
  animation: check-02 0.4s ease forwards;
}

#checklist input[type="radio"]:checked + label {
  color: var(--disabled);
  animation: move 0.3s ease 0.1s forwards;
}

#checklist input[type="radio"]:checked + label::before {
  background: var(--disabled);
  animation: slice 0.4s ease forwards;
}

#checklist input[type="radio"]:checked + label::after {
  animation: firework 0.5s ease forwards 0.1s;
}
#checkvist input[type="radio"]:checked + label {
  color: var(--disabled);
  animation: move 0.3s ease 0.1s forwards;
}

#checkvist input[type="radio"]:checked + label::before {
  background: var(--disabled);
  animation: slice 0.4s ease forwards;
}

#checkvist input[type="radio"]:checked + label::after {
  animation: firework 0.5s ease forwards 0.1s;
}

@keyframes move {
  50% {
    padding-left: 8px;
    padding-right: 0px;
  }

  100% {
    padding-right: 4px;
  }
}

@keyframes slice {
  60% {
    width: 100%;
    left: 4px;
  }

  100% {
    width: 100%;
    left: -2px;
    padding-left: 0;
  }
}

@keyframes check-01 {
  0% {
    width: 4px;
    top: auto;
    transform: rotate(0);
  }

  50% {
    width: 0px;
    top: auto;
    transform: rotate(0);
  }

  51% {
    width: 0px;
    top: 8px;
    transform: rotate(45deg);
  }

  100% {
    width: 5px;
    top: 8px;
    transform: rotate(45deg);
  }
}

@keyframes check-02 {
  0% {
    width: 4px;
    top: auto;
    transform: rotate(0);
  }

  50% {
    width: 0px;
    top: auto;
    transform: rotate(0);
  }

  51% {
    width: 0px;
    top: 8px;
    transform: rotate(-45deg);
  }

  100% {
    width: 10px;
    top: 8px;
    transform: rotate(-45deg);
  }
}

@keyframes firework {
  0% {
    opacity: 1;
    box-shadow: 0 0 0 -2px #4f29f0, 0 0 0 -2px #4f29f0, 0 0 0 -2px #4f29f0, 0 0 0 -2px #4f29f0, 0 0 0 -2px #4f29f0, 0 0 0 -2px #4f29f0;
  }

  30% {
    opacity: 1;
  }

  100% {
    opacity: 0;
    box-shadow: 0 -15px 0 0px #4f29f0, 14px -8px 0 0px #4f29f0, 14px 8px 0 0px #4f29f0, 0 15px 0 0px #4f29f0, -14px 8px 0 0px #4f29f0, -14px -8px 0 0px #4f29f0;
  }
}

.form {
  --input-focus: #2d8cf0;
  --font-color: #323232;
  --font-color-sub: #666;
  --bg-color: beige;
  --main-color: black;
  padding: 20px;
  background: lightblue;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  gap: 20px;
  border-radius: 5px;
  border: 2px solid var(--main-color);
  box-shadow: 4px 4px var(--main-color);
}

.title {
  color: var(--font-color);
  font-weight: 900;
  font-size: 20px;
  margin-bottom: 25px;
}

.title span {
  color: var(--font-color-sub);
  font-weight: 600;
  font-size: 17px;
}

.input {
  width: 250px;
  height: 40px;
  border-radius: 5px;
  border: 2px solid var(--main-color);
  background-color: var(--bg-color);
  box-shadow: 4px 4px var(--main-color);
  font-size: 15px;
  font-weight: 600;
  color: var(--font-color);
  padding: 5px 10px;
  outline: none;
}

.input::placeholder {
  color: var(--font-color-sub);
  opacity: 0.8;
}

.input:focus {
  border: 2px solid var(--input-focus);
}

.login-with {
  display: flex;
  gap: 20px;
}

.button-log {
  cursor: pointer;
  width: 40px;
  height: 40px;
  border-radius: 100%;
  border: 2px solid var(--main-color);
  background-color: var(--bg-color);
  box-shadow: 4px 4px var(--main-color);
  color: var(--font-color);
  font-size: 25px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.icon {
  width: 24px;
  height: 24px;
  fill: var(--main-color);
}

.button-log:active, .button-confirm:active {
  box-shadow: 0px 0px var(--main-color);
  transform: translate(3px, 3px);
}

.button-confirm {
  margin: 50px auto 0 auto;
  width: 120px;
  height: 40px;
  border-radius: 5px;
  border: 2px solid var(--main-color);
  background-color: var(--bg-color);
  box-shadow: 4px 4px var(--main-color);
  font-size: 17px;
  font-weight: 600;
  color: var(--font-color);
  cursor: pointer;
}


.butonn-reserv {
    margin-bottom: 20px;
    margin-top: 20px;
    font-weight: 600;
    width: 60%;
    background: #024a71;
    color: white;
    border-radius: 9px;
    height: 5vh;
    font-size: 17px;
}
/* .hover-image {
    transition: transform 0.3s ease-in-out;
}

.image-container:hover .hover-image {
    transform: scale(1.1);
} */
.ltr-33{
    font-size: 18px;
    text-align: center;
    font-weight: 500;
    font-family: ui-monospace;
}
.ctnn-33{
    position: absolute;
    top: 18%;
}
.clsstt-3{
    font-size: 20px;
    font-weight: 800;
}

input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

input[type='number'] {
  -moz-appearance: textfield;
}
</style>