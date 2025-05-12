import HomeView from '@renderer/views/HomeView.vue'
import LoginView from '@renderer/views/LoginView.vue'
import PlantsListView from '@renderer/views/Plants/PlantsListView.vue'
import PlantsCreateView from '@renderer/views/Plants/PlantsCreateView.vue'
import PlantsEditView from '@renderer/views/Plants/PlantsEditView.vue'
import FloorPlanView from '@renderer/views/Plants/FloorPlanView.vue'
import { useAuthStore } from '@renderer/stores/auth'
import {
  type NavigationGuardNext,
  type RouteLocationNormalized,
  type RouteRecordRaw
} from 'vue-router' // Import vue-router types

// Navigation guard function to protect routes
function requireAuth(
  _to: RouteLocationNormalized,
  _from: RouteLocationNormalized,
  next: NavigationGuardNext
) {
  const authStore = useAuthStore()
  if (!authStore.isAuthenticated) {
    next('/login')
  } else {
    next()
  }
}

// Navigation guard specifically for admin routes
function requireAdmin(
  _to: RouteLocationNormalized,
  _from: RouteLocationNormalized,
  next: NavigationGuardNext
) {
  const authStore = useAuthStore()
  if (!authStore.isAuthenticated) {
    next('/login')
  } else if (!authStore.isAdmin) {
    next('/') // Redirect non-admins to home
  } else {
    next()
  }
}

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    component: HomeView,
    beforeEnter: requireAuth
  },
  { path: '/login', component: LoginView },
  {
    path: '/plants',
    component: PlantsListView,
    beforeEnter: requireAuth
  },
  {
    path: '/plants/create',
    component: PlantsCreateView,
    beforeEnter: requireAuth
  },
  {
    path: '/plants/edit/:id',
    component: PlantsEditView,
    beforeEnter: requireAuth
  },
  {
    path: '/plants/floor-plan',
    component: FloorPlanView,
    beforeEnter: requireAuth
  },
  {
    path: '/plants/floor-plan/:id',
    component: FloorPlanView,
    beforeEnter: requireAuth
  },
  {
    path: '/material-flows',
    component: () => import('@renderer/views/MaterialFlows.vue'),
    beforeEnter: requireAuth
  },
  {
    path: '/machines',
    component: () => import('@renderer/views/Machines/MachinesListView.vue'),
    beforeEnter: requireAuth
  },
  {
    path: '/machines/create',
    component: () => import('@renderer/views/Machines/MachinesCreateView.vue'),
    beforeEnter: requireAuth
  },
  {
    path: '/machines/edit/:id',
    component: () => import('@renderer/views/Machines/MachinesEditView.vue'),
    beforeEnter: requireAuth
  },
  {
    path: '/machine-types',
    component: () => import('@renderer/views/Machines/MachineTypesListView.vue'),
    beforeEnter: requireAuth
  },
  {
    path: '/machine-types/create',
    component: () => import('@renderer/views/Machines/MachineTypesCreateView.vue'),
    beforeEnter: requireAuth
  },
  // Admin routes
  {
    path: '/admin/users',
    component: () => import('@renderer/views/Admin/UsersManagementView.vue'),
    beforeEnter: requireAdmin
  },

  // External Factors routes
  {
    path: '/external-factors',
    component: () => import('@renderer/views/ExternalFactors/ExternalFactorsListView.vue'),
    beforeEnter: requireAuth
  },
  {
    path: '/external-factors/create',
    component: () => import('@renderer/views/ExternalFactors/ExternalFactorsCreateView.vue'),
    beforeEnter: requireAuth
  },
  {
    path: '/external-factors/edit/:id',
    component: () => import('@renderer/views/ExternalFactors/ExternalFactorsEditView.vue'),
    beforeEnter: requireAuth
  },

  // Redirect to login if path doesn't exist
  { path: '/:pathMatch(.*)*', redirect: '/login' }
]

export default routes
