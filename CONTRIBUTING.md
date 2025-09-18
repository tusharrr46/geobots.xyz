# Contributing to GeoBots

Thank you for your interest in contributing to GeoBots! We welcome contributions from the community.

## Getting Started

1. Fork the repository
2. Clone your fork: `git clone https://github.com/your-username/geobots.xyz.git`
3. Create a new branch: `git checkout -b feature/your-feature-name`

## Development Setup

1. Install dependencies:
   ```bash
   yarn install
   ```

2. Set up environment variables:
   ```bash
   cp .env.example .env
   ```
   
3. Get a Mapbox API key from https://account.mapbox.com/access-tokens/ and add it to your `.env` file

4. Start the development server:
   ```bash
   yarn start
   ```

## Making Changes

- Follow the existing code style and patterns
- Add comments for complex logic
- Test your changes locally before submitting

## Submitting Changes

1. Commit your changes: `git commit -m "Description of changes"`
2. Push to your branch: `git push origin feature/your-feature-name`
3. Open a Pull Request with a clear description of your changes

## Code Style

- Use meaningful variable and function names
- Follow React hooks best practices
- Keep components focused and reusable
- Use absolute imports from `src/`

## Reporting Issues

Please open an issue on GitHub with:
- Clear description of the problem
- Steps to reproduce
- Expected vs actual behavior
- Browser and OS information

## Questions?

Feel free to open an issue for questions or reach out to the maintainers.