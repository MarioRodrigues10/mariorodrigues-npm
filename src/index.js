#! /usr/bin/env node
"use strict";
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, "__esModule", { value: true });
const boxen_1 = __importDefault(require("boxen"));
const chalk_1 = __importDefault(require("chalk"));
const inquirer_1 = __importDefault(require("inquirer"));
const clear_1 = __importDefault(require("clear"));
const open_1 = __importDefault(require("open"));
(0, clear_1.default)();
const prompt = inquirer_1.default.createPromptModule();
const questions = [
  {
    type: "list",
    name: "action",
    message: "What you want to do?",
    choices: [
      {
        name: `Send me an ${chalk_1.default.green.bold("email")}?`,
        value: () => {
          (0, open_1.default)("mailto:mjsrodrigues4@gmail.com");
          console.log(
            "mjsrodrigues4@gmail.com is awaiting for your email!\nSee you soon.\n"
          );
        },
      },
      {
        name: "Just quit.",
        value: () => {
          console.log("Okay, I guess I can accept that, have a nice day!\n");
        },
      },
    ],
  },
];
const data = {
  name: chalk_1.default.bold.green("      Mário Rodrigues"),
  handle: chalk_1.default.white("@mariorodrigues10"),
  github:
    chalk_1.default.gray("https://github.com/") +
    chalk_1.default.green("mariorodrigues10"),
  web:
    chalk_1.default.white("https://") +
    chalk_1.default.cyan("mariorodrigues10.github.io") +
    chalk_1.default.hidden("/?ref=npx"),
  npx: `${chalk_1.default.red("npx")} ${chalk_1.default.white(
    "mariorodrigues10"
  )}`,
  labelWork: chalk_1.default.white.bold("       Work:"),
  labelGitHub: chalk_1.default.white.bold("     GitHub:"),
  labelLinkedIn: chalk_1.default.white.bold("   LinkedIn:"),
  labelWeb: chalk_1.default.white.bold("        Web:"),
  labelCard: chalk_1.default.white.bold("       Card:"),
};
const me = (0, boxen_1.default)(
  [
    `${data.name} / ${data.handle}`,
    ``,
    `${data.labelGitHub}  ${data.github}`,
    `${data.labelWeb}  ${data.web}`,
    ``,
    `${data.labelCard}  ${data.npx}`,
    ``,
    `${chalk_1.default.italic(
      "Avid enthusiast for open source software development."
    )}`,
    `${chalk_1.default.italic("Open source perspective of life.")}`,
  ].join("\n"),
  {
    margin: 1,
    float: "center",
    padding: 1,
    borderStyle: "single",
    borderColor: "cyan",
  }
);
console.info(me);
prompt(questions).then((answer) => answer.action());
