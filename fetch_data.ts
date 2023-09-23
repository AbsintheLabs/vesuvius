import { init, useQuery } from "@airstack/airstack-react";

init("2ff6dfbde8e74fa0bae1fecb7645c040c");


const GET_LABELS = `
query MyQuery($address: Identity!) {
  Wallet(input: {identity: $address, blockchain: ethereum}) {
    addresses
    socials {
      dappName
      profileName
      profileBio
    }
    domains {
      name
    }
    primaryDomain {
      name
    }

  }
}
`;

// export default GET_LABELS;
 // Replace with GraphQL Query

const Component = () => {
  const { data, loading, error } = useQuery(GET_LABELS);

  if (data) {
    return "<p>Data: {JSON.stringify(data)}</p>";
  }

  if (loading) {
    return "<p>Loading...</p>";
  }

  if (error) {
    return "<p>Error: {error.message}</p>";
  }
};
