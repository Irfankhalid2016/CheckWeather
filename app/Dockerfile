FROM tiangolo/uvicorn-gunicorn-fastapi:python3.7
COPY requirements.txt requirements.txt
RUN pip install -r requirements.txt
COPY ./app /app

ENV PORT=5000
EXPOSE 5000

ENTRYPOINT ["uvicorn", "main:app", "--host", "0.0.0.0", "--port", "5000"]