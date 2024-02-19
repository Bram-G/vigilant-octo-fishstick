"use client"
import { Container, Text, Button, Group } from '@mantine/core';
import classes from './about.module.css';
import { Header } from '@/components/Header/Header';

function About() {
  return (
    <div className={classes.wrapper}>
      <Header></Header>
      <Container size={700} className={classes.inner}>
        <h1 className={classes.title}>
          Your{' '}
          <Text component="span" variant="gradient" gradient={{ from: 'blue', to: 'cyan' }} inherit>
            One Stop Companion
          </Text>{' '}
          For Movie Mondays
        </h1>

        <Text className={classes.description} color="dimmed">
          Create a group and invite your friends! Add movies you intend to watch and find new movies to experience together. Once you are ready to watch, simply shuffle your list and find the perfect movie for your movie monday!
        </Text>

        <Group className={classes.controls}>
          <Button
            size="xl"
            className={classes.control}
            variant="gradient"
            gradient={{ from: 'blue', to: 'cyan' }}
          >
            Get started
          </Button>
        </Group>
      </Container>
    </div>
  );
}

export default About;