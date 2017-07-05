import { DocumentNode, GraphQLSchema } from 'graphql';

/**
 * An object that provides query and introspetion access to a GraphQL endpoint
 *
 * TODO fni find better name
 */
export interface GraphQLEndpoint {
    /**
     * Performs a GraphQL query against the endpoint
     * @param query the query string in the GraphQL language
     * @param variables an optional map of key-value pairs for variables
     */
    query(query: DocumentNode, variables?: { [name: string]: any }, context?: any): Promise<any>;

    /**
     * Fetches the schema of the endpoint. May be expensive, so user should cache the result.
     *
     * Field resolvers are guaranteed to be unset.
     */
    getSchema(): Promise<GraphQLSchema>
}
