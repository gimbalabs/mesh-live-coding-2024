import { Asset, BlockfrostProvider } from "@meshsdk/core";
import { useAssets } from "@meshsdk/react";
import { useState, useEffect } from "react";

export default function AssetMetadataComponent() {
  const [currentMetadata, setCurrentMetadata] = useState()

  const assetToTest = "2a384dc205a97463577fc98b704b537f680c0eba84126eb7d5857c865050424c3230323344656d6f47696d626c6572"
  //https://blockfrost-api.iohk-preprod.dandelion.link/
  const blockfrostProvider = new BlockfrostProvider("https://blockfrost-api.iohk-preprod.dandelion.link/");


  useEffect(() => {
    async function fetchMeSomeMetadata() {
      const _metadata = await blockfrostProvider.fetchAssetMetadata(assetToTest)
      setCurrentMetadata(_metadata);
    }

    fetchMeSomeMetadata()
  }, [])

  return (
    <div className="border border-white rounded-md p-5 my-5">
      <h1>Hello Asset Metadata Component</h1>
      <pre>{JSON.stringify(currentMetadata, null, 2)}</pre>
    </div>
  );
}
