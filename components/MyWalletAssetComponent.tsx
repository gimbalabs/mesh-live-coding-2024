import { Asset } from "@meshsdk/core";
import { useAssets } from "@meshsdk/react";
import { useState, useEffect } from "react";

export default function MyWalletAssetComponent() {
  const assets = useAssets();

  const requiredPolicyId = "13275d9ab5e00fe59b1ecfd1f1926e7e53d4090321f3ba6f7b90a876"

  const [hasRequiredToken, setHasRequiredToken] = useState(false)

  useEffect(() => {
    const _targetAsset = assets?.find((asset: Asset) => (
      asset.unit.substring(0, 56) == requiredPolicyId
    ))

    console.log("Target Asset:", _targetAsset)

    if(_targetAsset) {
      setHasRequiredToken(true)
    }
  }, [assets])

  console.log(assets);

  return (
    <div>
      <h2 className="text-2xl font-bold py-5">This is my assets component!</h2>
      <h3>Do you have the required token?</h3>
      {hasRequiredToken ? "SUCCESS" : "NOPE"}
    </div>
  );
}
