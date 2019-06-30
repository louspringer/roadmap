// eslint-disable
// this is an auto generated file. This will be overwritten

export const createInitiative = `mutation CreateInitiative($input: CreateInitiativeInput!) {
  createInitiative(input: $input) {
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
export const updateInitiative = `mutation UpdateInitiative($input: UpdateInitiativeInput!) {
  updateInitiative(input: $input) {
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
export const deleteInitiative = `mutation DeleteInitiative($input: DeleteInitiativeInput!) {
  deleteInitiative(input: $input) {
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
export const createRankAttribute = `mutation CreateRankAttribute($input: CreateRankAttributeInput!) {
  createRankAttribute(input: $input) {
    id
    name
    description
    relativeWeight
  }
}
`;
export const updateRankAttribute = `mutation UpdateRankAttribute($input: UpdateRankAttributeInput!) {
  updateRankAttribute(input: $input) {
    id
    name
    description
    relativeWeight
  }
}
`;
export const deleteRankAttribute = `mutation DeleteRankAttribute($input: DeleteRankAttributeInput!) {
  deleteRankAttribute(input: $input) {
    id
    name
    description
    relativeWeight
  }
}
`;
