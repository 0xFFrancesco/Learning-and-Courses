import gql from 'graphql-tag';

export default gql`
query GetLyrics($id: ID!){
  song(id: $id) {
  	id
    lyrics {
      id
      content
      likes
    }
  }
}
`;