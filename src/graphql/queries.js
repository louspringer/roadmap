// eslint-disable
// this is an auto generated file. This will be overwritten

export const getInitiative = `query GetInitiative($id: ID!) {
  getInitiative(id: $id) {
    id
    name
    description
    rankAttributeValues {
      rankAttribute {
        id
        name
        description
        relativeWeight
      }
      attributeValue
    }
  }
}
`;
export const listInitiatives = `query ListInitiatives(
  $filter: ModelInitiativeFilterInput
  $limit: Int
  $nextToken: String
) {
  listInitiatives(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      name
      description
      rankAttributeValues {
        attributeValue
      }
    }
    nextToken
  }
}
`;
export const getRankAttribute = `query GetRankAttribute($id: ID!) {
  getRankAttribute(id: $id) {
    id
    name
    description
    relativeWeight
  }
}
`;
export const listRankAttributes = `query ListRankAttributes(
  $filter: ModelRankAttributeFilterInput
  $limit: Int
  $nextToken: String
) {
  listRankAttributes(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      name
      description
      relativeWeight
    }
    nextToken
  }
}
`;
