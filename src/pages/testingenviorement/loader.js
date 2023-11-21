import React, { useState } from "react";
import { Loader, LoadingOverlay } from "@mantine/core";

const setLoading = () => {
  const [Loading, setLoading] = useState(true);
  return <Loader color="orange" size="xl" />;
};

export default setLoading;
