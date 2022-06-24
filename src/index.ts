#! /usr/bin/env node

import boxen from "boxen";
import chalk from "chalk";
import inquirer from "inquirer";
import clear from "clear";
import open from "open";

clear();

const prompt = inquirer.createPromptModule();

const questions = [
  {
    type: "list",
    name: "action",
    message: "What you want to do?",
    choices: [
      {
        name: `Send me an ${chalk.green.bold("email")}?`,
        value: () => {
          open("mailto:mjsrodrigues4@gmail.com");
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
  name: chalk.bold.green("      Mário Rodrigues"),
  handle: chalk.white("@mariorodrigues10"),
  github: chalk.gray("https://github.com/") + chalk.green("mariorodrigues10"),
  web:
    chalk.white("https://") +
    chalk.cyan("mariorodrigues10.github.io") +
    chalk.hidden("/?ref=npx"),
  npx: `${chalk.red("npx")} ${chalk.white("mariorodrigues10")}`,

  labelWork: chalk.white.bold("       Work:"),
  labelGitHub: chalk.white.bold("     GitHub:"),
  labelLinkedIn: chalk.white.bold("   LinkedIn:"),
  labelWeb: chalk.white.bold("        Web:"),
  labelCard: chalk.white.bold("       Card:"),
};

const me = boxen(
  [
    `${data.name} / ${data.handle}`,
    ``,
    `${data.labelGitHub}  ${data.github}`,
    `${data.labelWeb}  ${data.web}`,
    ``,
    `${data.labelCard}  ${data.npx}`,
    ``,
    `${chalk.italic("Avid enthusiast for open source software development.")}`,
    `${chalk.italic("Open source perspective of life.")}`,
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
