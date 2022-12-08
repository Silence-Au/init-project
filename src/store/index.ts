import State from "./interface";
import { createStore, Store, useStore as baseUseStore } from "vuex";
import { InjectionKey } from "vue";

export const key: InjectionKey<Store<State>> = Symbol("key");
export const store = createStore<State>({
    state() {
        return {
            count: 1,
            info: "this is info",
        };
    },
    getters: {},
    mutations: {
        addCount(state) {
            state.count++;
        },
    },
    actions: {},
    modules: {},
});
export function useStore() {
    return baseUseStore(key);
}
