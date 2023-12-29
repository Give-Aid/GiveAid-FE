import toast from "react-hot-toast";
import { IoMdClose } from "react-icons/io";

const style = {
  background: "#42a5f5",
  color: "#fff",
};
const planStyle = {
  background: "rgb(250 204 21)",
  color: "#000",
};

const className = "font-medium";

const added = (title: string) =>
  toast(`Beneficiary added! You're all set to donate to - ${title}`, {
    style: style,
    className: className,
  });

const alreadyAdded = () =>
  toast(`Looks Like you've already added this beneficiary`, {
    style: style,
    className: className,
  });

const removed = () =>
  toast(
    `Beneficiary removed successfully. You can always add them back later if needed.`,
    {
      style: style,
      className: className,
    }
  );

const removedAll = () =>
  toast(`All selected beneficiaries cleared.`, {
    style: style,
    className: className,
  });

const activatePlan = () =>
  toast(
    (t) => (
      <div>
        <div className="flex justify-between">
          Automated Ramadan Donations Activated!
          <IoMdClose onClick={() => toast.dismiss(t.id)} className={"cursor-pointer"}/>
        </div>{" "}

        <div className="mt-2 font-normal">
          All donations made from now until the end of Ramadan will be recurring
          daily. Your support will make a lasting impact throughout this holy
          month. Thank you for your generosity! To diable, click &apos;Deactivate
          Ramadan Donations&apos; button or the toggle on the navigation bar.
        </div>
      </div>
    ),
    {
      style: planStyle,
      className: className,
      position: "top-left",
      duration: 10000,
    }
  );
const deactivatePlan = () =>
  toast(`Automated Ramadan Donations Deactivated!`, {
    style: planStyle,
    className: className,
    position: "top-left",
  });

export {
  added,
  alreadyAdded,
  removed,
  removedAll,
  activatePlan,
  deactivatePlan,
};
