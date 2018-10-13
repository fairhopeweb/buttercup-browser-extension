import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { Route } from "react-router";
import { ConnectedRouter } from "react-router-redux";
import styled, { ThemeProvider } from "styled-components";
import { Classes, Divider } from "@blueprintjs/core";
import store from "./redux/index.js";
import history from "./redux/history.js";
import ArchivesListPage from "./containers/ArchivesListPage.js";
import EntriesPage from "./containers/EntriesPage.js";
import HeaderBar from "./containers/HeaderBar.js";
import Container from "../shared/components/Container.js";
import themes from "../shared/themes.js";

import "../shared/styles/base.sass";
import "./styles/popup.sass";

const ContentWrapper = styled.div`
    display: flex;
    flex-direction: column;
    flex: 1;
    padding: 0.25rem 0.5rem 0.5rem;
`;

ReactDOM.render(
    <Provider store={store}>
        <ConnectedRouter history={history}>
            <ThemeProvider theme={themes.dark}>
                <Container className={Classes.DARK}>
                    <HeaderBar />
                    <Divider />
                    <ContentWrapper>
                        <Route exact path="/" component={EntriesPage} />
                        <Route path="/vaults" component={ArchivesListPage} />
                    </ContentWrapper>
                </Container>
            </ThemeProvider>
        </ConnectedRouter>
    </Provider>,
    document.getElementById("root")
);
