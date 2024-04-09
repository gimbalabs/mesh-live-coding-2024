import { request, gql } from "graphql-request";
import { useQuery } from "@tanstack/react-query";

export default function GraphQLTestComponent() {
  // #1 Define this graphQL query
  const allTxMetadata = gql`
    query getMetadataForPolicyId($policyId: Hash28Hex!) {
      transactions(where: { mint: { asset: { policyId: { _eq: $policyId } } } }) {
        includedAt
        outputs {
          address
        }
        metadata {
          key
          value
        }
      }
    }
  `;

  // #2 We make the query using useQuery hook
  const { data } = useQuery({
    queryKey: ["films"],
    queryFn: async () =>
      request(
        "https://d.graphql-api.iohk-preprod.dandelion.link/",
        allTxMetadata,
        // variables are type-checked too!
        { policyId: "96fbd9676a145e368b224484a312a1bdf594b6a08eb0f0d358151f04" }
      ),
  });

  return (
    <div>
      <h2 className="text-2xl font-bold py-5">My GraphQL Component</h2>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
}
