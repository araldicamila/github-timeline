import { TimelineItem } from "../TimelineItem";
import { FlagYear, NoDataContainer, TimelineContainer } from "./styles";

export const Timeline = ({ list }) => {
  return list && list.length > 0 ? (
    <TimelineContainer>
      {list &&
        list.map((content, index) => (
          <>
            <FlagYear>
              <p>⭐ {content.year} ⭐</p>
            </FlagYear>

            {content.items &&
              content.items.map((item, idx) => (
                <TimelineItem
                  sum={idx + index}
                  key={item.name}
                  name={item.name}
                  description={item.description}
                  createdAt={item.created_at}
                />
              ))}
          </>
        ))}
    </TimelineContainer>
  ) : (
    <NoDataContainer>
      <p>You don't have any repository 😥</p>
      <a href="https://github.com/new" target="_blank" rel="noreferrer">
        Create your first repository
      </a>
    </NoDataContainer>
  );
};
