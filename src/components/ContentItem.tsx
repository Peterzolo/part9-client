interface IContentItem {
  name: string;
  exerciseCount: number;
}

const ContentItem: React.FC<IContentItem> = ({ name, exerciseCount }) => {
  return (
    <div>
      <p>Name: {name}</p>
      <p>Exercise Count: {exerciseCount}</p>
    </div>
  );
};

export default ContentItem;
