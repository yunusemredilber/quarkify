import { storiesOf } from "@storybook/react";
import React from "react";
import Button from "../components/button";

const stories = storiesOf("Button", module);

const action = () => alert("Clicked");
// tslint:disable-next-line:no-console
const actionLog = () => console.log("Clicked");

stories.add("Variants", () => (
  <div>
    <Button onClick={actionLog}>Primary</Button>
    &nbsp;
    <Button variant="secondary" onClick={actionLog}>
      Secondary
    </Button>
    &nbsp;
    <Button variant="gray" onClick={actionLog}>
      Gray
    </Button>
  </div>
));

stories.add("Button with Action", () => (
  <div>
    <Button onClick={action} variant="primary">Click</Button>
  </div>
));

stories.add("Disabled", () => (
  <Button disabled onClick={actionLog}>
    Disabled
  </Button>
));
stories.add("Fluid", () => (
  <Button variant="primary" fluid onClick={actionLog}>
    Fluid
  </Button>
));
stories.add("Button with Icon", () => (
  <div>
    <Button variant="primary" icon="star" onClick={actionLog}>
      Favorilere ekle
    </Button>
    &nbsp;
    <Button variant="secondary" icon="like" onClick={actionLog}>
      3
    </Button>
    &nbsp;
    <Button variant="secondary" icon="basket" round onClick={actionLog}>
      Sepette %20 indirim
    </Button>
    &nbsp;
    <Button variant="secondary" icon="heart" onClick={actionLog} />
  </div>
));