FROM golang:alpine as builder

WORKDIR /app

COPY main.go .

RUN go build -o main main.go

FROM scratch

COPY --from=builder /app/main .

ENTRYPOINT ["/main"]