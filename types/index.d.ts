import Vue from 'vue'

declare function install (vue: typeof Vue): void

export const Plugin: {
  install: typeof install
}

export * from './HelloWorld'
