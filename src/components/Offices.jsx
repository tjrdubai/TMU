import clsx from "clsx";

function Office({ name, children, invert = false }) {
  return (
    <address
      className={clsx(
        "text-sm not-italic",
        invert ? "text-neutral-300" : "text-neutral-600"
      )}
    >
      <strong className={invert ? "text-white" : "text-neutral-950"}>
        {name}
      </strong>
      <br />
      {children}
    </address>
  );
}

const Offices = ({ invert = false, ...props }) => {
  return (
    <ul role="list" {...props}>
      {/* Dubai Headquarters */}
      <li>
        <Office name="Dubai, UAE" invert={invert}>
          Business Bay, Dubai  
          <br />
          United Arab Emirates
        </Office>
      </li>

      {/* Global / International Presence */}
      <li>
        <Office name="Global Partners" invert={invert}>
          Operational teams across multiple regions  
          <br />
          Supporting international e-commerce expansion
        </Office>
      </li>
    </ul>
  );
};

export default Offices;
