import { DiscussionEmbed } from "disqus-react";
import PropTypes from "prop-types";

const DisqusComments = ({ post }) => {
  const siteUrl = "https://indiedevcasts.com";
  const disqusShortname = "indiedevcasts";

  const disqusConfig = {
    url: `${siteUrl}/posts/${post.id}`,
    identifier: post.id, // Single post id
    title: post.title, // Single post title
  };

  return (
    <div>
      <DiscussionEmbed shortname={disqusShortname} config={disqusConfig} />
    </div>
  );
};

DisqusComments.propTypes = {
  article: PropTypes.object,
  url: PropTypes.string,
};

export default DisqusComments;
