import { configTest } from "./config.unit-test";

const environment = window["env"] ?? configTest;

export default {
  // add common configuration values here
  ...environment,
};
