import js from "@eslint/js";
import eslintConfigPrettier from "eslint-config-prettier";
import pluginVue from 'eslint-plugin-vue'
import {
  defineConfigWithVueTs,
  vueTsConfigs,
} from '@vue/eslint-config-typescript'

export default defineConfigWithVueTs(
  js.configs.recommended,
  eslintConfigPrettier,
  pluginVue.configs['flat/essential'],
  vueTsConfigs.recommended,
)
