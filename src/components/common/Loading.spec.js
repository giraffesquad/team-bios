import React from "react";
import {shallow} from "enzyme";
import {Loading} from "./Loading";

describe("Loading", () => {
    it("renders Loading component", () => {
      expect(shallow(<Loading/>).length).toEqual(1);
    });

    it("renders basic Loading component", () => {
        const wrapper = shallow(<Loading isBasic={true}/>);
        expect(wrapper.find('.basic-styling').length).toEqual(1);
    });

    it("renders preview Loading component", () => {
        const wrapper = shallow(<Loading isBasic={false}/>);
        expect(wrapper.find('.preview-styling').length).toEqual(1);
    });
});