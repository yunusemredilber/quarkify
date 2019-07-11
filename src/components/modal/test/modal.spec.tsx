import Enzyme, { mount } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import faker from "faker";
import React from "react";
import sinon from "sinon";
import Modal from "../index";

Enzyme.configure({ adapter: new Adapter() });

describe("modal specs", () => {
  const sandbox = sinon.createSandbox();

  afterEach(() => {
    sandbox.verifyAndRestore();
  });

  it("should render modal component", () => {
    const wrapper = mount(<Modal show={true} />);
    expect(wrapper.exists(".modal-main")).toEqual(true);
  });

  it("should not render modal component", () => {
    const wrapper = mount(<Modal show={false} />);
    expect(wrapper.exists(".modal-main")).toEqual(false);
  });

  it("should render header sub component", () => {
    const wrapper = mount(
      <Modal show={true}>
        <Modal.Header />
      </Modal>,
    );
    expect(wrapper.find(".modal-header")).toHaveLength(1);
  });

  it("should render content sub component", () => {
    const wrapper = mount(
      <Modal show={true}>
        <Modal.Content />
      </Modal>,
    );
    expect(wrapper.find(".modal-content")).toHaveLength(1);
  });

  it("should render actions sub component", () => {
    const text = faker.random.word();
    const wrapper = mount(
      <Modal show={true}>
        <Modal.Actions>
          <button>{text}</button>
        </Modal.Actions>
      </Modal>,
    );
    expect(wrapper.find(".modal-actions")).toHaveLength(1);
  });

  it("should have close icon button by default", () => {
    const wrapper = mount(
      <Modal show={true}>
        <Modal.Header />
      </Modal>,
    );
    expect(wrapper.find(".icon-close")).toHaveLength(1);
  });

  it("should not have icon button if noIcon prop is passed", () => {
    const wrapper = mount(
      <Modal show={true}>
        <Modal.Header noIcon />
      </Modal>,
    );
    expect(wrapper.find(".icon-close")).toHaveLength(0);
  });

  it("should call onClose when icon is clicked", () => {
    const onClose = sandbox.spy();
    const wrapper = mount(
      <Modal show={true}>
        <Modal.Header onClose={onClose} />
      </Modal>,
    );
    wrapper.find("i").simulate("click");
    expect(onClose.calledOnce).toEqual(true);
  });

  it("should have a left icon if leftIcon prop is given", () => {
    const wrapper = mount(
      <Modal show={true}>
        <Modal.Header leftIcon="back-button" />
      </Modal>,
    );
    expect(wrapper.find("i.icon-back-button")).toHaveLength(1);
  });

  it("should call the left icon onClick callback if the leftIconOnClick prop is given", () => {
    const leftOnClose = sandbox.spy();
    const wrapper = mount(
      <Modal show={true}>
        <Modal.Header leftIcon="back-button" leftIconOnClick={leftOnClose} />
      </Modal>,
    );
    wrapper.find("i.icon-back-button").simulate("click");
    expect(leftOnClose.calledOnce).toBe(true);
  });

  it("should add disable-scroll class when modal is shown", () => {
    const wrapper = mount(<Modal show={false} />);
    wrapper.setProps({ show: true });

    expect(document.body.classList.contains("disable-scroll")).toBe(true);
  });

  it("should remove disable-scroll class when modal is hidden", () => {
    const wrapper = mount(<Modal show={true} />);
    wrapper.setProps({ show: false });

    expect(document.body.classList.contains("disable-scroll")).toBe(false);
  });

  it("should call onChange when show prop is changed", () => {
    const onChange = sandbox.spy();
    const wrapper = mount(
      <Modal onChange={onChange} show={false} />,
    );
    wrapper.setProps({ show: true });

    expect(onChange.calledOnce).toBe(true);
  });
});