import React, { PureComponent } from "react";
import Link from "next/link";

class NavigationLink extends PureComponent {
  render() {
    const { href, as, children, ..._props } = this.props;
    return (
      <div {..._props} className={"p-0"}>
        <Link href={href} as={as}>
          <a className="md-list-tile md-list-tile--mini w-full overflow-hidden">
            {children}
          </a>
        </Link>
      </div>
    );
  }
}
export default NavigationLink;
