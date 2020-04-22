import { MutationTree, ActionTree, ActionContext } from "vuex";
import { DeviceType } from "~/types";

export const state = (): DeviceType => ({
  isMobile: true,
  isTablet: false,
  isDesktop: false,
})

export const mutations: MutationTree<DeviceType> = {
  setDeviceFlag(state: DeviceType, deviceType: string): void {
    state.isMobile = deviceType === 'mobile'
    state.isTablet = deviceType === 'tablet'
    state.isDesktop = deviceType === 'desktop'
  }
}

interface Actions<S, R> extends ActionTree<S, R> {
  setFlagMobile (actionContext: ActionContext<S, R>): void;
  setFlagTablet (actionContext: ActionContext<S, R>): void;
  setFlagDesktop (actionContext: ActionContext<S, R>): void;
}

export const actions: Actions<DeviceType, DeviceType> = {
  setFlagMobile({ commit }) {
    commit('setDeviceFlag', 'mobile')
  },
  setFlagTablet({ commit }) {
    commit('setDeviceFlag', 'tablet')
  },
  setFlagDesktop({ commit }) {
    commit('setDeviceFlag', 'desktop')
  },
}
