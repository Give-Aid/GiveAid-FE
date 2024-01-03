import { IoFilter } from "react-icons/io5";
import { LuChevronsUpDown } from "react-icons/lu";
import { IoMdClose } from "react-icons/io";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { useEffect, useState } from "react";

type Props = {
  type: "organization" | "fundraiser";
};

const Filter = ({ type }: Props) => {
  const [drawer, setDrawer] = useState(false);

  const handleClickOutside = (event: any) => {
    if (drawer === false || event.target.closest(".drawer")) return;
    setDrawer(false);
  };

  useEffect(() => {
    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [drawer]);

  const causes = [
    {
      id: "mosque",
      value: "Mosque",
    },
    {
      id: "community",
      value: "Community Development",
    },
    {
      id: "poverty",
      value: "Poverty Alleviation",
    },
    {
      id: "shelter",
      value: "Shelter",
    },
    {
      id: "education",
      value: "Education",
    },
    {
      id: "health",
      value: "Health Care",
    },
    {
      id: "widows",
      value: "Widows",
    },
    {
      id: "orphans",
      value: "Orphans",
    },
    {
      id: "children",
      value: "Children",
    },
    {
      id: "elderly",
      value: "Elderly",
    },
    {
      id: "disabled",
      value: "Disabled/Special Needs",
    },
    {
      id: "da'wah",
      value: "Da'wah Projects",
    },
    {
      id: "feeding",
      value: "Feeding",
    },
  ];

  const endDate = [
    {
      id: "withinWeek",
      value: "Ending within a week",
    },
    {
      id: "withinMonth",
      value: "Ending within the month",
    },
    {
      id: "pastMonth",
      value: "Ending in more than a month",
    },
  ];

  return (
    <div>
      <div className="md:w-[200px] flex md:flex-col flex-row items-start">
        <div
          className="flex gap-2 items-center text-[20px] font-[500] text-sky-950 w-[80px] md:w-full drawer"
          onClick={() => {
            setDrawer(true);
          }}
        >
          Filter <IoFilter />{" "}
        </div>
        <div
          className={`filter-drawer drawer ${
            drawer ? "translate-x" : "-translate-x-full md:translate-x-0"
          }`}
        >
          <IoMdClose className="absolute top-8 right-8 text-[30px] md:hidden hover:cursor-pointer" onClick={()=>setDrawer(false)}/>
          <Collapsible className="my-16">
            <CollapsibleTrigger className="text-[18px] font-[500] flex gap-2 items-center mb-2">
              By Cause <LuChevronsUpDown />
            </CollapsibleTrigger>
            <CollapsibleContent>
              {causes.map((cause) => (
                <div key={cause.id} className="flex items-center">
                  <input
                    type="checkbox"
                    id={cause.id}
                    name={cause.id}
                    value={cause.value}
                    className="mr-2 w-4 h-4 checked:bg-sky-500"
                  />
                  <label htmlFor={cause.value}>{cause.value}</label>
                </div>
              ))}
            </CollapsibleContent>
          </Collapsible>
          {type === "fundraiser" && (
            <Collapsible className="">
              <CollapsibleTrigger className="text-[18px] font-[500] flex gap-2 items-center mb-2">
                By End Date <LuChevronsUpDown />
              </CollapsibleTrigger>
              <CollapsibleContent>
                {endDate.map((date) => (
                  <div className="flex items-center" key={date.id}>
                    <input
                      type="radio"
                      id={date.id}
                      name="date"
                      value={date.id}
                      className="mr-2 w-4 h-4"
                    />
                    <label htmlFor={date.value}>{date.value}</label>
                  </div>
                ))}
              </CollapsibleContent>
            </Collapsible>
          )}
        </div>
      </div>
    </div>
  );
};

export default Filter;
