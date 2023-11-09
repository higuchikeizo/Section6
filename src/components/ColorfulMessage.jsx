import React from "react";

export const ColorfulMessage = (props) => {
  const { color, children } = props; // 本来であれば"props.color"とするところ、代入変数を使用すると"props."を省略できる。
  const contentStyle = {
    //color: color,
    color, // 正式には上のように記載するが、propsの引数名を同じにした場合は、左記のように省略できる
    fontSize: "18px"
  };

  return <p style={contentStyle}>{children}</p>;
};

// export default ColorfulMessage;
