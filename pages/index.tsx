import Head from "next/head";
import { CardanoWallet, MeshBadge } from "@meshsdk/react";
import MyWalletComponent from "../components/MyWalletComponent";
import MyWalletAssetComponent from "../components/MyWalletAssetComponent";
import AssetMetadataComponent from "../components/AssetMetadata";
import GraphQLTestComponent from "../components/GraphQLTestComponent";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Mesh App on Cardano</title>
        <meta name="description" content="A Cardano dApp powered my Mesh" />
        <link rel="icon" href="https://meshjs.dev/favicon/favicon-32x32.png" />
      </Head>

      <main className="">
        <div className="demo">
          <MyWalletComponent />
        </div>

        <div className="demo">
          <MyWalletAssetComponent />
        </div>

        <div className="demo">
          <AssetMetadataComponent />
        </div>

        <div className="demo">
          <GraphQLTestComponent />
        </div>
      </main>
    </div>
  );
}
