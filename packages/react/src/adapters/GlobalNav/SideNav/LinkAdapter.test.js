import { mount } from "enzyme";
import React from "react";
import { GlobalNav as VanillaGlobalNav } from "hig-vanilla";
import LinkAdapter from "./LinkAdapter";

describe("Help LinkAdapter", () => {
  it("implements the hig interface", () => {
    expect(mockInstance => {
      mount(
        <LinkAdapter
          higInstance={mockInstance}
          onClick={() => {}}
          onHover={() => {}}
          title="Autodesk"
          link="http://autodesk.com"
          target="_blank"
        />
      );
    }).toImplementHIGInterfaceOf(
      VanillaGlobalNav._partials.SideNav._partials.SideNavFull._partials.Link
    );
  });
});
