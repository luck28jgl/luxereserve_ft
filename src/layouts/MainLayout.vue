<script setup>
    // import kamajologo from '../assets/kamajo-logo-ferreteria.png'
</script>
<template>
  <div>
    <TransitionRoot as="template" :show="sidebarOpen">
      <Dialog as="div" class="relative z-50 " @close="sidebarOpen = false"> <!--class= lg:hidden-->
        <TransitionChild as="template" enter="transition-opacity ease-linear duration-300" enter-from="opacity-0" enter-to="opacity-100" leave="transition-opacity ease-linear duration-300" leave-from="opacity-100" leave-to="opacity-0">
          <div class="fixed inset-0 bg-gray-900/80" />
        </TransitionChild>

        <div class="fixed inset-0 flex">
          <TransitionChild as="template" enter="transition ease-in-out duration-300 transform" enter-from="-translate-x-full" enter-to="translate-x-0" leave="transition ease-in-out duration-300 transform" leave-from="translate-x-0" leave-to="-translate-x-full">
            <DialogPanel class="relative mr-16 flex w-full max-w-xs flex-1">
              <TransitionChild as="template" enter="ease-in-out duration-300" enter-from="opacity-0" enter-to="opacity-100" leave="ease-in-out duration-300" leave-from="opacity-100" leave-to="opacity-0">
                <div class="absolute left-full top-0 flex w-16 justify-center pt-5">
                  <button type="button" class="-m-2.5 p-2.5" @click="sidebarOpen = false">
                    <span class="sr-only">Close sidebar</span>
                    <XMarkIcon class="h-6 w-6 text-white" aria-hidden="true" />
                  </button>
                </div>
              </TransitionChild>
              <!--Sidebar component, swap this element with another sidebar if you like -->
              <div class="flex grow flex-col gap-y-5 overflow-y-auto border-r border-gray-200 bg-white px-6">
                <div class="flex h-16 shrink-0 items-center mt-6">
                  <div class="w-11/12 flex justify-center">
                    <img :src="kamajologo" class="w-3/4">
                  </div>
                </div>
                <nav class="flex flex-1 flex-col">
                  <ul role="list" class="flex flex-1 flex-col gap-y-7">
                    <li>
                      <ul role="list" class="-mx-2 space-y-1">
                        <li v-for="item in navigation" :key="item.name">
                          <div @click="pageIr(item)" :class="[item.url.includes(currentUrl) ? 'bg-gray-50 text-black' : 'text-gray-700 hover:text-black hover:bg-gray-50', 'group flex gap-x-3 rounded-md p-2 text-sm leading-6 font-semibold cursor-pointer']">
                            {{ item.name }}
                          </div>
                        </li>
                      </ul>
                    </li>
                    <li class="mt-auto">
                        <div class="flex items-center gap-x-4 px-6 py-3 text-sm font-semibold leading-6 text-gray-900 hover:bg-gray-50 cursor-pointer" @click="logout()">
                            <div>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15m3 0l3-3m0 0l-3-3m3 3H9" />
                                </svg>

                            </div>
                            Cerrar Sesión
                        </div>
                    </li>
                  </ul>
                </nav>
              </div>
            </DialogPanel>
          </TransitionChild>
        </div>
      </Dialog>
    </TransitionRoot>
    <div>
      <div class="sticky top-0 z-40 flex h-16 shrink-0 items-center gap-x-4 border-b border-gray-200 bg-black px-4 shadow-sm sm:gap-x-6 sm:px-6 lg:px-8">
        <button type="button" class="-m-2.5 p-2.5 text-white " @click="sidebarOpen = true">
          <span class="sr-only">Open sidebar</span>
          <Bars3Icon class="h-6 w-6" aria-hidden="true" />
        </button> <p class="text-white ml-px block text-sm font-medium leading-6">Menu</p>
        <div class="h-6 w-px bg-gray-900/10 lg:hidden" aria-hidden="true" />
      </div>

      <main class="py-2">
        <div class="px-2 sm:px-4 lg:px-6">
            <router-view/>
        </div>
      </main>
    </div>
  </div>
</template>
<script>
    import LoginServices from '../services/LoginService';
    import EssentialLink from "@/components/EssentialLink.vue";
    import {
      Dialog,
      DialogPanel,
      DialogTitle,
      Menu,
      MenuButton,
      MenuItem,
      MenuItems,
      TransitionChild,
      TransitionRoot,
    } from '@headlessui/vue'
    import { Bars3Icon, XMarkIcon, EllipsisVerticalIcon, BellIcon, CalendarIcon } from '@heroicons/vue/24/outline'
    import LoginService from '@/services/LoginService';
    export default {
      name: 'MainLayout',
      components: {
        Bars3Icon,
        EssentialLink,
        Dialog,
        DialogPanel,
        DialogTitle,
        Menu,
        MenuButton,
        MenuItem,
        MenuItems,
        TransitionChild,
        TransitionRoot,
        XMarkIcon,
        EllipsisVerticalIcon,
        BellIcon,
        CalendarIcon
      },
      mounted() {
        this.tipoUsuario = this.$store.state.user.type
        this.id_user = sessionStorage.getItem('pk')
        this.filtrarNavigation();
      },
      computed: {
          currentUrl() {
              return this.$router.currentRoute.value.fullPath;
          }
      },
      data() {
          return {
              id_user: '',
              sidebarOpen: false,
              nowYear: new Date().getFullYear(),
              navigation: [
                // { name: 'Administradores', link: 'AdminIndex', icon: '',  url: '/administradores', tipo:[0]},
                { name: 'Registro de actividades', link: 'RegistroActividadesIndex', icon: '',  url: '/registroactividades', tipo:[0]},
                { name: 'Estadísticas', link: 'EstadisticasIndex', icon: '',  url: '/estadisticas', tipo:[0]},
                { name: 'Productos', link: 'ProductosIndex', icon: '',  url: '/productos', tipo:[0,3,5]},
                // { name: 'Administradores', link: 'AdminIndex', icon: '',  url: '/administradores', tipo:[0]},
                { name: 'Clientes', link: 'ClientsIndex', icon: '',  url: '/clientes', tipo:[0,1,5]},
                { id: 9, name: 'Usuarios', link: 'UsuariosIndex', icon: '', url: '/usuarios', tipo:[0]},
                { name: 'Transportistas', link: 'TransportistasIndex', icon: '', url: '/transportistas', tipo:[0]},
                { name: 'Transportes', link: 'TransportesIndex', icon: '', url: '/transportes', tipo:[0]},
                { name: 'Compras', link: 'ComprasIndex', icon: '', url: '/compras', tipo:[0,2]},
                { name: 'Requisiciones', link: 'RequisicionesIndex', icon: '', url: '/requisiciones', tipo:[0,1,5]},
                { name: 'Cotizaciones', link: 'CotizacionesIndex', icon: '', url: '/cotizaciones', tipo:[0,1,2]},
                { name: 'Bodegas', link: 'BodegasIndex', icon: '', url: '/bodegas', tipo:[0]},
                { name: 'Entradas', link: 'EntradasIndex', icon: '', url: '/entradas', tipo:[0,3,5]},
                { name: 'Salidas', link: 'SalidasIndex', icon: '', url: '/salidas', tipo:[0,3,5]},
                { name: 'Entregas', link: 'EntregasIndex', icon: '', url: '/entregas', tipo:[0,3,5]},
                { name: 'Pedidos por Surtir', link: 'PedidosSurtirIndex', icon: '', url: '/pedidos-por-surtir', tipo:[0,5]},
                { name: 'Pedidos por Facturar', link: 'PedidosFacturarIndex', icon: '', url: '/pedidos-por-facturar', tipo:[0,5]},
                { name: 'Salidas por Surtir', link: 'SalidasSurtirIndex', icon: '', url: '/salidas-por-surtir', tipo:[0,3,5]},
                { name: 'Rutas', link: 'RutasIndex', icon: '', url: '/rutas', tipo:[4]},
                { name: 'Rutas', link: 'RutasListIndex', icon: '', url: '/rutasList', tipo:[0]},
                { name: 'Facturas', link: 'FacturasIndex', icon: '', url: '/facturas', tipo:[0]},
              ],
              open: false,
              tipoUsuario: '',
          }
      },
      methods: {
        pageIr(item){
          this.sidebarOpen = false
          if ('ResumenIndex' == item.link) {
            this.$router.push({ name: item.link, params: { id: 'reciente' } })
          } else {
            this.$router.push(item.url)
          }
        },
        logout() {
          window.sessionStorage.removeItem("auth_token")
          let loader = this.$loading.show({
              canCancel: false,
              loader: 'bars'
          });
          LoginServices.logut().then((response) => {
              loader.hide()
              this.$store.dispatch("user/logout", response.data);
              this.$router.push("/ingresar");
          }).catch((e) => {
              loader.hide()
          });
        },
        filtrarNavigation() {
          LoginService.getUType({
            username: this.id_user
          }).then((response) => {
            this.tipoUsuario = response.data.tipo
            this.navigation = this.navigation.filter(item => {
              if (item.tipo.includes(this.tipoUsuario)) {
                return item;
              }
            });
          }).catch(error => {
            console.log(error)
            this.$swal({
              icon: 'error',
              title: 'Error al obtener el tipo de usuario'
            });
          });
        },
      }
    }
</script>
