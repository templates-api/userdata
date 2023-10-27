 const BlockIndexInput = document.createElement("input");
 
  const setBlockIndex = async function(index)
  {
       BlockIndexInput.setAttribute("value",index);
  }
  const getBlockIndex = async function()
  {
      return BlockIndexInput.getAttribute("value");
  }