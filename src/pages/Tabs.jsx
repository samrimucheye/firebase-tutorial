import React from "react";

const Tabs = () => {
  return (
    <div>
      <div role="tablist" class="tabs">
        <a role="tab" class="tab">
          Tab 1
        </a>
        <a role="tab" class="tab tab-active">
          Tab 2
        </a>
        <a role="tab" class="tab">
          Tab 3
        </a>
      </div>
    </div>
  );
};

export default Tabs;
