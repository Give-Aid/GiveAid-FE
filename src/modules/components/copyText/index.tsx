import React, { useState } from "react";
import { LuCopy, LuCopyCheck } from "react-icons/lu";

type Props = {
  text: string;
};

const CopyText = ({ text }: Props) => {
  const [copied, setCopied] = useState(false);

  const copyText = () => {
    navigator.clipboard.writeText(text);
    setCopied(true);
  };

  return (
    <span className="flex gap-1">
      <span className="font-[600]">{text}</span>
      <button onClick={copyText}>
        {copied ? <LuCopyCheck className='text-[20px]'/> : <LuCopy className='text-[20px]'/>}
      </button>
    </span>
  );
};

export default CopyText;
