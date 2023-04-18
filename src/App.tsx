import { useState } from "react";
import { legends, pages } from "./constants";
import { Content, MainScreen, SideBar } from "./globals";
import ComponentRender from "./components/ComponentRender";
import { content } from "./components/ContentRender/types";
import ContentRender from "./components/ContentRender";

const App = () => {
  const [page, setPage] = useState<pages>('login')
  const [content, setContent] = useState<content>('clients');

  const handlePage = (value: pages) => setPage(value);

  const handleContent = (value: content) => setContent(value);

  return (
    <MainScreen>
      <SideBar>
        <h2>
          {legends[page]}
        </h2>
        
        <ComponentRender
          currentPage={page}
          currentContent={content}
          handlePage={handlePage}
          handleContent={handleContent}
        />
      </SideBar>
      <Content>
        { page === 'dashboard' &&
          <ContentRender
            content={content}
          />
        }
      </Content>
    </MainScreen>
  );
};

export default App;
