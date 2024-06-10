import {
  Card,
  CardHeader,
  CardBody,
  Text,
  Heading,
  Box,
} from "@chakra-ui/react";

function Post(props: {
  post: { id: number; title: String; description: String };
}) {
  const { post } = props;

  return (
    <Card m={2}>
      <CardHeader>
        <Heading size="md">{post.title}</Heading>
      </CardHeader>
      <CardBody>
        <Box>
          <Heading size="xs" textTransform="uppercase">
            Description
          </Heading>
          <Text pt="2" fontSize="sm">
            {post.description}
          </Text>
        </Box>
      </CardBody>
    </Card>
  );
}

export default Post;
