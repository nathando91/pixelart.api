# Naikyo Project Base

Brief description of what the project does and its goals. Here, you would typically give a high-level overview of using Hasura with Next.js and the benefits they bring to your project.

## Prerequisites

Before you begin, ensure you have met the following requirements:

- Docker and Docker Compose installed
- Node.js (recommend version)
- Any other global dependencies

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Installation

1. **Clone the repository**

   \```bash
   git clone [repository url]
   cd [local repository]
   \```

2. **Set up environment variables**

   Duplicate the `.env.example` file and rename it to `.env`. Fill in the environment variables with your specific settings.

   \```bash
   cp .env.example .env
   \```

### Running the application

1. **Start Docker Compose**

   This command will start all services defined in your `docker-compose.yml` file.

   \```bash
   docker-compose up -d
   \```

   The `-d` flag will run the containers in the background.

2. **Access the application**

   - Next.js application: `http://localhost:${PORT}`
   - Hasura console: `http://localhost:${HASURA_PORT}`

   Replace `${PORT}` and `${HASURA_PORT}` with the values from your `.env` file.

### Useful Commands

- **Stopping the application**

  To stop all services:

  \```bash
  docker-compose down
  \```

- **Rebuilding the application**

  If you make changes to the Docker setup, you might need to rebuild:

  \```bash
  docker-compose up -d --build
  \```

## Development

Guidelines for how to make changes to the code, test the application, and contribute to the repository.

### Code Structure

Brief overview of the codebase structure and what each top-level directory contains.

### Hasura Metadata and Migrations

Instructions on how to work with Hasura migrations and metadata, and how to apply them to your local Hasura instance.

## Testing

How to run the automated tests for this system.

## Deployment

Notes on how to deploy the project on a live system.

## Contributing

Short notes on how others can contribute to the project. You can link to a `CONTRIBUTING.md` file if you have one.

## License

This project is licensed under the [Your License] - see the `LICENSE.md` file for details.

## Contact

If you have any questions or comments about the project, here's how you can reach the team.
# backend
# d1-backend


# git
git config --global user.email "doduytu@gmail.com"
git config --global user.name "Nathan Do"# d1-backend
# sofamon.online
# nathando.live
# tprofiles.api
# pprofiles.api
# proxies.api
# tonscan.api
# autocv
# pixelart.api
