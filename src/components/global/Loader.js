import React, { useContext } from "react";
import { Spin } from "antd";
import { LoaderContext } from "../../contexts/LoaderContext";

const Loader = () => {
  const { loading } = useContext(LoaderContext);

  return (
    <div className={`loader ${loading ? "" : "removeLoader"}`}>
      <Spin spinning={loading} size='large'></Spin>
    </div>
  );
};

export default Loader;
