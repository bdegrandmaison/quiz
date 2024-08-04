import { createRootRoute, Outlet } from '@tanstack/react-router';
import { TanStackRouterDevtools } from '@tanstack/router-devtools';
import AppNav from '../components/Nav';
import { Col, Container, Row } from 'react-bootstrap';

export const Route = createRootRoute({
  component: () => (
    <>
      <AppNav />
      <Container fluid className="p-4">
        <Row className="justify-content-md-center">
          <Col md="auto">
            <Outlet />
          </Col>
        </Row>
      </Container>
      <TanStackRouterDevtools />
    </>
  ),
});
